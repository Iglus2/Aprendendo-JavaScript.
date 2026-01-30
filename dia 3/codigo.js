function boletim(notas) {
    if (notas < 6) {
        return "Reprovado";
    } else {
        return "Aprovado";
    }
}

const boletim1 = boletim(5);
console.log(boletim1);