function removeLeadingTrailing(n) {
    if ([...n].every(ch => ch === '0' || ch === '.')) {
        return "0";
    }

    while (n.length > 1 && n[0] === '0' && n[1] !== '.') {
        n = n.slice(1);
    }
    if (n.includes('.')) {
        while (n[n.length - 1] === '0') {
            n = n.slice(0, -1);
        }


        if (n[n.length - 1] === '.') {
            n = n.slice(0, -1);
        }
    }

    return n;
}