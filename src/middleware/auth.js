export default function auth({ next, router }) {
    if(!localStorage.getItem('token')) {
        return false;
    }
    return next();
}