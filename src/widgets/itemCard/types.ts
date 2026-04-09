
export interface ItemCardProps {
    item: {
        id: number;
        name: string;
    };
    onEdit?: (id: number) => void;
    onCopy?: (id: number) => void;
    onDelete?: (id: number) => void;
    className?: string;
}