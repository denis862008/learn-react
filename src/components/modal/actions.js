export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export function openModal(options) {
    const { title, content, btnText } = options;
    return {
        type: OPEN_MODAL,
        title, content, btnText
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}
