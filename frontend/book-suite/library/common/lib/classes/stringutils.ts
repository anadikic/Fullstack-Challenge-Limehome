export class StringUtils {

    public static rtrim(str: string, pattern: string) {
        return str.replace(new RegExp(pattern + '*$'), '');
    }

    public static ltrim(str: string, pattern: string) {
        return str.replace(new RegExp('^' + pattern + '*'), '');
    }
}
