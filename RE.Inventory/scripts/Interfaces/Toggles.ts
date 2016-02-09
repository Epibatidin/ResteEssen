export class Toggles {
    
    public static IsRipple(): boolean {

        if (window.parent && (window.parent as any).ripple)
            return true;

        return false;
    }   
}
