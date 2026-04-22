
export interface Item {
    id: number;
    name:string;
}

export interface ItemCardProps {
    item: Item;
    onEdit?: (id: number) => void;
    onCopy?: (id: number) => void;
    onDelete?: (id: number) => void;
    className?: string;
}