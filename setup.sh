#! /bin/bash
read -p "   <<<<<< Enter Your Project Name: "  projectName
read -p "   <<<<<< Enter Your Project Id (Android applicationId and iOS bundleId): "  projectId
read -p "   <<<<<< Enter Your Project iOS Deployment Target (default is 9.0): "  deployTarget
read -p "   <<<<<< Enter Your Project Android minSDKVersion (default is 17): "  minSDK
read -p "   <<<<<< Select Your App Theme (material/platform, default is platform): "  appTheme
read -p "   <<<<<< Select Your App Template (tab/drawer/platform, default is platform): "  appTemplate
read -p "   <<<<<< Select Your App Region (fa/en, default is fa): "  appRegion

echo "   >>>>>> Initializing project... , please wait"

# rename propject folder
mv starter $projectName
cd $projectName
mv starter.code-workspace "$projectName.code-workspace"

# set region
cd src/configs
find . -name 'consts.tsx' -print0 | xargs -0 sed -i "" "s/fa/$appRegion/g"

# set theme
theme="getPlatformTheme()"
if [ "$appTheme" == "material" ]; then
theme="getMaterialTheme()"
fi
find . -name 'themes.tsx' -print0 | xargs -0 sed -i "" "s/APP_THEME/$theme/g"
cd ../

# set template
homePath="index"
if [ "$appTemplate" == "tab" ]; then
homePath="index.ios"
elif [ "$appTemplate" == "drawer" ]; then
homePath="index.android"
fi
find . -name 'App.tsx' -print0 | xargs -0 sed -i "" "s/HOME_PATH/$homePath/g"

leftMenu="leftMenuPlatform"
if [ "$appTemplate" == "tab" ]; then
leftMenu="leftMenuNull"
elif [ "$appTemplate" == "drawer" ]; then
leftMenu="leftMenuHamburger"
fi
cd screens/home
find . -name 'HomeScreen.tsx' -print0 | xargs -0 sed -i "" "s/LEFT_MENU/$leftMenu/g"

cd ../settings
find . -name 'SettingsScreen.tsx' -print0 | xargs -0 sed -i "" "s/LEFT_MENU/$leftMenu/g"

cd ../../../

# rename project
react-native-rename $projectName -b $projectId

# set ios bundleId and deploy target
cd ios
cd $projectName.xcodeproj
find . -name 'project.pbxproj' -print0 | xargs -0 sed -i "" "s/ir.rainyday.reactnative.starter/$projectId/g"
find . -name 'project.pbxproj' -print0 | xargs -0 sed -i "" "s/9.0/$deployTarget/g"
cd ../../

# set SplashActivity package name
dir=$(pwd)
cd android
find . -name 'local.properties' -print0 | xargs -0 sed -i "" "s/CURRENT_USER/$USER/g"
find . -name 'build.gradle' -print0 | xargs -0 sed -i "" "s/minSdkVersion = 17/minSdkVersion = $minSDK/g"
packagePath="${projectId//./$'/'}"
cd "app/src/main/java/$packagePath"
find . -name 'SplashActivity.java' -print0 | xargs -0 sed -i "" "s/ir.rainyday.reactnative.starter/$projectId/g"
cd "$dir"

# install dependencies
echo "   >>>>>> Installing dependencies... , please wait"
npm install

open "$projectName.code-workspace"
echo "   >>>>>> Successfully finished"
cd ../
rm -R screenshots
rm -R README.md
rm -- "$0"
