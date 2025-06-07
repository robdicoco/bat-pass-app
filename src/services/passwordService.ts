export default function generatePassword(size : number = 10) {
    // return Math.random().toString(36).substring(2, 15);
    let password : string = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < size; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}