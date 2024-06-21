package com.eyenet.mobile.network.info;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "EyenetNetworkInfo")
public class EyenetNetworkInfoPlugin extends Plugin {

    private EyenetNetworkInfo implementation = new EyenetNetworkInfo();

    @PluginMethod
    public void echo(PluginCall call) {
        ret.put("network", implementation.getNetworkInfo());
        call.resolve(ret);
    }
}
