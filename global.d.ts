interface Window {
    Alipay: {
        authV2(params: any, callback: (data: any) => void, errorCallback: (reason: any) => void): void;
        payV2(params: any, callback: (data: any) => void, errorCallback: (err: any) => void): void;
    };
}
