import moment from "moment";

export const validateNIC = (value: string): boolean => {
    return /\d{3}-\d{2}-\d{2}/.test(value) && value.length == 9;
}

export const validateDate = (date: moment.Moment, against: string): boolean => {
    return date.isAfter(new Date());
}

export const validateEmail = (value: string) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}
export const validateLabValue = (value: string): boolean => {
    return value === "" ? true : /^\d+(\.\d{1,2})?$/.test(value) && (parseFloat(value) > 0);
}
