package com.chat_app.modules;

import com.chat_app.widgets.ProgressDialog;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;



public class LoadingNativeModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public LoadingNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "LoadingNative";
    }

    @ReactMethod
    public void showLoading() {
        ProgressDialog.showLoading(getCurrentActivity());
    }

    @ReactMethod
    public void hideLoading() {
        ProgressDialog.hideLoading(getCurrentActivity());
    }
}
