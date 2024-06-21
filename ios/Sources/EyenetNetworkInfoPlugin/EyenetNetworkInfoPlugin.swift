import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(EyenetNetworkInfoPlugin)
public class EyenetNetworkInfoPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "EyenetNetworkInfoPlugin"
    public let jsName = "EyenetNetworkInfo"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = EyenetNetworkInfo()

    @objc func echo(_ call: CAPPluginCall) {
       
        call.resolve([
            "network": "example"
        ])
    }
}
