/**
 * @description IUPAC class has a unique purpose: store constants to be used in
 * other classes, like Seq.
 * @attribute {string} DNA: ACGT letters
 * @attribute {string} RNA: ACGU letters
 * @attribute {string} PROTEIN: ACDEFGHIKLMNPQRSTVWXY letters
 * @attribute {array} GENETIC_CODE: Codon (triplet) association with aminoacids
 * @author Alejandro Asensio
 * @version 2019-02-15
 */
export class IUPAC {
  public static DNA = 'ACGT';
  public static RNA = 'ACGU';
  public static PROTEIN = 'ACDEFGHIKLMNPQRSTVWXY';
  public static GENETIC_CODE = {
    UCA: 'S',
    UCC: 'S',
    UCG: 'S',
    UCU: 'S',
    UUC: 'F',
    UUU: 'F',
    UUA: 'L',
    UUG: 'L',
    UAC: 'Y',
    UAU: 'Y',
    UAA: '*',
    UAG: '*',
    UGC: 'C',
    UGU: 'C',
    UGA: '*',
    UGG: 'W',
    CUA: 'L',
    CUC: 'L',
    CUG: 'L',
    CUU: 'L',
    CCA: 'P',
    CAU: 'H',
    CAA: 'Q',
    CAG: 'Q',
    CGA: 'R',
    CGC: 'R',
    CGG: 'R',
    CGU: 'R',
    AUA: 'I',
    AUC: 'I',
    AUU: 'I',
    AUG: 'M',
    ACA: 'T',
    ACC: 'T',
    ACG: 'T',
    ACU: 'T',
    AAC: 'N',
    AAU: 'N',
    AAA: 'K',
    AAG: 'K',
    AGC: 'S',
    AGU: 'S',
    AGA: 'R',
    AGG: 'R',
    CCC: 'P',
    CCG: 'P',
    CCU: 'P',
    CAC: 'H',
    GUA: 'V',
    GUC: 'V',
    GUG: 'V',
    GUU: 'V',
    GCA: 'A',
    GCC: 'A',
    GCG: 'A',
    GCU: 'A',
    GAC: 'D',
    GAU: 'D',
    GAA: 'E',
    GAG: 'E',
    GGA: 'G',
    GGC: 'G',
    GGG: 'G',
    GGU: 'G',
  };
}

/*
To understand the letters defined above, visit the following link or see the
plain text tables below:

http://www.bioinformatics.org/sms2/iupac.html

IUPAC codes

DNA:

Nucleotide Code:  Base:
----------------  -----
A.................Adenine
C.................Cytosine
G.................Guanine
T (or U)..........Thymine (or Uracil)
R.................A or G
Y.................C or T
S.................G or C
W.................A or T
K.................G or T
M.................A or C
B.................C or G or T
D.................A or G or T
H.................A or C or T
V.................A or C or G
N.................any base
. or -............gap

Protein:

Amino Acid Code:  Three letter Code:  Amino Acid:
----------------  ------------------  -----------
A.................Ala.................Alanine
B.................Asx.................Aspartic acid or Asparagine
C.................Cys.................Cysteine
D.................Asp.................Aspartic Acid
E.................Glu.................Glutamic Acid
F.................Phe.................Phenylalanine
G.................Gly.................Glycine
H.................His.................Histidine
I.................Ile.................Isoleucine
K.................Lys.................Lysine
L.................Leu.................Leucine
M.................Met.................Methionine
N.................Asn.................Asparagine
P.................Pro.................Proline
Q.................Gln.................Glutamine
R.................Arg.................Arginine
S.................Ser.................Serine
T.................Thr.................Threonine
V.................Val.................Valine
W.................Trp.................Tryptophan
X.................Xaa.................Any amino acid
Y.................Tyr.................Tyrosine
Z.................Glx.................Glutamine or Glutamic acid
*/
