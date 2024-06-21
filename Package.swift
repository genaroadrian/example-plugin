// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "EyenetMobileNetworkInfo",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "EyenetMobileNetworkInfo",
            targets: ["EyenetNetworkInfoPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "EyenetNetworkInfoPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/EyenetNetworkInfoPlugin"),
        .testTarget(
            name: "EyenetNetworkInfoPluginTests",
            dependencies: ["EyenetNetworkInfoPlugin"],
            path: "ios/Tests/EyenetNetworkInfoPluginTests")
    ]
)