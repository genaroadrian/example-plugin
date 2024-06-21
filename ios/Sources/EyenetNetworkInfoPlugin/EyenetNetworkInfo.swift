import Foundation

@objc public class EyenetNetworkInfo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
