package ir.rainyday.reactnative.starter;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;
 import com.facebook.react.ReactActivityDelegate;
 import com.facebook.react.ReactRootView;
 import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        
        SplashScreen.show(this);

        super.onCreate(savedInstanceState);

        // FORCE LTR
        I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
        // sharedI18nUtilInstance.forceRTL(getApplicationContext(), true);
        sharedI18nUtilInstance.allowRTL(this, true);
    
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Starter";
    }


      @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
