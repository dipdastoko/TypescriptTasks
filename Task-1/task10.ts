function getDisplayName(name: string | null | undefined) {
    return name ?? 'Anonymous';
}

const name = getDisplayName(null);
console.log(name);