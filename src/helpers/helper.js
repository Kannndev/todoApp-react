function getIconForCompletion(status) {
    return status ? ['fas', 'check-circle'] : ['fas', 'circle']
}

export const helper = {
    getIconForCompletion
}