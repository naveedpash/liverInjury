import moment from "moment";

export const validateNIC = (value: string): boolean => {
    return /\d{5}-\d{7}-\d{1}/.test(value) && value.length == 15;
}

export const validateDate = (date: moment.Moment, against: string): boolean => {
    return date.isBefore(against);
}

export const validateEmail = (value: string) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}
export const validateLabValue = (value: string): boolean => {
    return value === "" ? true : /^\d+(\.\d{1,2})?$/.test(value) && (parseFloat(value) > 0);
}
