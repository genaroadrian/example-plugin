package com.eyenet.mobile.network.info;

import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.content.Context;

public class EyenetNetworkInfo {


    public JSObject getNetworkInfo() {
        WifiManager wifiManager = (WifiManager) getContext().getApplicationContext().getSystemService(Context.WIFI_SERVICE);
        WifiInfo wifiInfo = wifiManager.getConnectionInfo();
        String ipAddress = intToInetAddress(wifiInfo.getIpAddress()).toString();
        JSObject networkInfo = new JSObject();
        networkInfo.put("ip_address", ipAddress);
        return ret;
    }
}
