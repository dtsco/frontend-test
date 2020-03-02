export const OPEN_MODAL = "app/OPEN_MODAL";
export const CLOSE_MODAL = "app/CLOSE_MODAL";

export function openModal() {
    return {
        type: OPEN_MODAL
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}