function rm_quotes(str) {
    return str.replaceAll(/"/g, '')
}

function rm_txt(str) {
    return str.replaceAll(/"|<(\/)?p>|<(\/)?span>|<(\/)?strong>|__/g, '').replaceAll(" ", ' ')
}

function rm_umlaut(str) {
    return str.replaceAll("ö", "^o*").replaceAll("ä", "^a*").replaceAll("ü", "^u*")
        .replaceAll("Ö", '^O*').replaceAll('Ä', '^A*').replaceAll('Ü', '^U*')
}

function convert2umlaut(str) {
    return str.replaceAll("^o*", "ö").replaceAll("^a*", "ä").replaceAll("^u*", "ü")
        .replaceAll("^O*", 'Ö').replaceAll('^A*', 'Ä').replaceAll('^U*', 'Ü')
}

module.exports = { rm_quotes, rm_txt, rm_umlaut, convert2umlaut }
