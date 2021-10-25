export const checkEmpty = (text) => {
    if (text === "") {
        return "*Không được bỏ trống";
    }
    return "";
}
export const checkEmail = (email) => {
    const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if(email.match(re)){
        return "";
    }
    return "Email không hợp lệ";
}
export const checkPhoneNumber = (number)=>{
    const matchNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(number.match(matchNum)){
        return "";
    }
    return "Số điện thoại không hợp lệ"
}