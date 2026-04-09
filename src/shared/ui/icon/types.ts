
export interface IconProps {
    name: 'close' | 'copy' | 'del' | 'edit'; 
    onClick?: () => void;
    className?: string;
    size?: number;
}