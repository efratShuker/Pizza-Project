/**
 *This file contain validaation functions for form's fields.
 */

//perform checking validation name input and returns error string
export const isValidName = (name) => {
    if (!name.match(/^[\wא-ת ]+$/)) {
        return "יש להכניס אותיות בלבד!"
    }
    if (name.length < 5) {
        return "שם קצר מדי!"
    }
    return "";
}

//perform checking validation id input and returns error string
export const isValidId = (id) => {
    if (id.length !== 9) {
        return "אורך תעודת הזהות חייב להיות בעל 9 ספרות!";
    } else {
        if (!id.match(/^[0-9]+$/)) {
            return "יש להכניס ספרות בלבד!";
        } else {
            let validSum = 0, num;
            for (let i in id) {
                num = Number(id[i]) * (i % 2 + 1);
                validSum += num > 9 ? num - 9 : num;
            }
            if (validSum % 10 !== 0 || Number(id) === 0) {
                return "תעודת הזהות אינה חוקית!";
            }
        }
        return "";
    }
}

//perform checking validation phone input and returns error string
export const isValidPhone = (phone) => {
    if (!(phone.match(/^(([0]([2|3|4|8|9|72|73|74|76|77])))[2-9]\d{6,7}/) || phone.match(/05+[0-9]-?[0-9]{7}/))) {
        return "מספר הטלפון שגוי!!"
    }
    return "";
}

export const isValidAddress = (address) => {
    if (!address.match(/[a-zA-Zא-ת ][0-9]{1,4}/g)) {
        return "כתובת אינה חוקית!";
    }
    return "";
}


//perform checking validation email input and returns error string
export const isValidEmail = (email) => {
    if (!email.match(/[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g)) {
        return "כתובת המייל אינה חוקית!"
    }
    return "";
}

export const isValidProductDescription = (description) => {
    if (!description.match(/^[א-ת ]+$/)) {
        return "יש להכניס אותיות בעברית בלבד!"
    }
    if (description.length < 3) {
        return "שם קצר מדי!"
    }
    return "";
}

export const isValidDepartment = (deptId, departments) => {
    const exist = departments.find(singleDept => singleDept.id === deptId);
    if (!exist) {
        return "מחלקה אינה קיימת!!";
    }
    return ""
}

export const isvalidproductCode = (code) => {
    if (code.length !== 6) {
        return false
    }
    return true;
}

export const isvalidPrice = (price) => {
    if (price <= 0) {
        return "יש להכניס מחיר גדול מאפס!";
    }
    return "";
}

export const isvalidAmount = (amount) => {
    if (amount < 0) {
        return "יש להכניס כמות גדולה מאפס!";
    }
    return "";
}



