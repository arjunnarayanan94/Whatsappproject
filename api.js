var axios = require("axios");
let store = async(
    UserType,
    sender,
    mobileNo,
    bankRef,
    transactionDate,
    transactionAmount,
    fraudType,
    fraudMethod,
    description,
    comment,
    attachmentUrl
) => {
    var data = JSON.stringify({
        feedback: "",

        comment: comment,

        source: "whatsapp",

        inputType: "TEXT",

        userType: UserType,

        mobileNo: mobileNo,

        bankRef: bankRef,

        transactionDate: transactionDate,

        transactionAmount: transactionAmount,

        fraudType: fraudType,

        fraudMethod: fraudMethod,

        description: description,

        attachmentUrl: attachmentUrl,

        userToken: sender,
    });
    console.log("Testsee ", data);

    var config = {
        method: "post",
        url: "http://172.105.49.9:8090/cybersena/savetodashboard/en/",
        headers: {
            Connection: "keep-alive",
            "sec-ch-ua": '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
            Accept: "application/json, text/plain, /",
            localtimezone: "Asia/Calcutta",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            appId: "9dc9030f-4276-4efc-b602-a46742e87a34",
            "Content-Type": "application/json",
        },
        data: data,
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function(response) {
                console.log("Hello ", JSON.stringify(response.data));
                console.log('test12', data)

                try {
                    let a = JSON.stringify(response.data);
                    const ref = JSON.parse(a);
                    const result = ref.referenceId;

                    resolve(result);
                } catch (err) {
                    resolve();
                }
            })
            .catch(function(error) {
                reject(err);
                console.log(error);
            });
    });
};

exports.store = store;