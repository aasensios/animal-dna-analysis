/*
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

export class IUPAC {

  public static unambiguous_dna: string = 'ACGT';
  public static unambiguous_rna: string = 'ACGU';
  public static unambiguous_protein: string = 'ACDEFGHIKLMNPQRSTVWXY';
  public static genetic_code: array = [
    'UCA': 'S', // Serine
    'UCC': 'S', // Serine
    'UCG': 'S', // Serine
    'UCU': 'S', // Serine
    'UUC': 'F', // Phenylalanine
    'UUU': 'F', // Phenylalanine
    'UUA': 'L', // Leucine
    'UUG': 'L', // Leucine
    'UAC': 'Y', // Tyrosine
    'UAU': 'Y', // Tyrosine
    'UAA': '*', // Stop
    'UAG': '*', // Stop
    'UGC': 'C', // Cysteine
    'UGU': 'C', // Cysteine
    'UGA': '*', // Stop
    'UGG': 'W', // Tryptophan
    'CUA': 'L', // Leucine
    'CUC': 'L', // Leucine
    'CUG': 'L', // Leucine
    'CUU': 'L', // Leucine
    'CCA': 'P', // Proline
    'CAU': 'H', // Histidine
    'CAA': 'Q', // Glutamine
    'CAG': 'Q', // Glutamine
    'CGA': 'R', // Arginine
    'CGC': 'R', // Arginine
    'CGG': 'R', // Arginine
    'CGU': 'R', // Arginine
    'AUA': 'I', // Isoleucine
    'AUC': 'I', // Isoleucine
    'AUU': 'I', // Isoleucine
    'AUG': 'M', // Methionine, Start
    'ACA': 'T', // Threonine
    'ACC': 'T', // Threonine
    'ACG': 'T', // Threonine
    'ACU': 'T', // Threonine
    'AAC': 'N', // Asparagine
    'AAU': 'N', // Asparagine
    'AAA': 'K', // Lysine
    'AAG': 'K', // Lysine
    'AGC': 'S', // Serine
    'AGU': 'S', // Serine
    'AGA': 'R', // Arginine
    'AGG': 'R', // Arginine
    'CCC': 'P', // Proline
    'CCG': 'P', // Proline
    'CCU': 'P', // Proline
    'CAC': 'H', // Histidine
    'GUA': 'V', // Valine
    'GUC': 'V', // Valine
    'GUG': 'V', // Valine
    'GUU': 'V', // Valine
    'GCA': 'A', // Alanine
    'GCC': 'A', // Alanine
    'GCG': 'A', // Alanine
    'GCU': 'A', // Alanine
    'GAC': 'D', // Aspartic Acid
    'GAU': 'D', // Aspartic Acid
    'GAA': 'E', // Glutamic Acid
    'GAG': 'E', // Glutamic Acid
    'GGA': 'G', // Glycine
    'GGC': 'G', // Glycine
    'GGG': 'G', // Glycine
    'GGU': 'G', // Glycine
  ];

}

// interface IDictionary {
//   [key: string]: string;
// };
// const GENETIC_CODE: IDictionary = {
//   'UCA': 'S', // Serine
//   'UCC': 'S', // Serine
//   'UCG': 'S', // Serine
//   'UCU': 'S', // Serine
//   'UUC': 'F', // Phenylalanine
//   'UUU': 'F', // Phenylalanine
//   'UUA': 'L', // Leucine
//   'UUG': 'L', // Leucine
//   'UAC': 'Y', // Tyrosine
//   'UAU': 'Y', // Tyrosine
//   'UAA': '*', // Stop
//   'UAG': '*', // Stop
//   'UGC': 'C', // Cysteine
//   'UGU': 'C', // Cysteine
//   'UGA': '*', // Stop
//   'UGG': 'W', // Tryptophan
//   'CUA': 'L', // Leucine
//   'CUC': 'L', // Leucine
//   'CUG': 'L', // Leucine
//   'CUU': 'L', // Leucine
//   'CCA': 'P', // Proline
//   'CAU': 'H', // Histidine
//   'CAA': 'Q', // Glutamine
//   'CAG': 'Q', // Glutamine
//   'CGA': 'R', // Arginine
//   'CGC': 'R', // Arginine
//   'CGG': 'R', // Arginine
//   'CGU': 'R', // Arginine
//   'AUA': 'I', // Isoleucine
//   'AUC': 'I', // Isoleucine
//   'AUU': 'I', // Isoleucine
//   'AUG': 'M', // Methionine, Start
//   'ACA': 'T', // Threonine
//   'ACC': 'T', // Threonine
//   'ACG': 'T', // Threonine
//   'ACU': 'T', // Threonine
//   'AAC': 'N', // Asparagine
//   'AAU': 'N', // Asparagine
//   'AAA': 'K', // Lysine
//   'AAG': 'K', // Lysine
//   'AGC': 'S', // Serine
//   'AGU': 'S', // Serine
//   'AGA': 'R', // Arginine
//   'AGG': 'R', // Arginine
//   'CCC': 'P', // Proline
//   'CCG': 'P', // Proline
//   'CCU': 'P', // Proline
//   'CAC': 'H', // Histidine
//   'GUA': 'V', // Valine
//   'GUC': 'V', // Valine
//   'GUG': 'V', // Valine
//   'GUU': 'V', // Valine
//   'GCA': 'A', // Alanine
//   'GCC': 'A', // Alanine
//   'GCG': 'A', // Alanine
//   'GCU': 'A', // Alanine
//   'GAC': 'D', // Aspartic Acid
//   'GAU': 'D', // Aspartic Acid
//   'GAA': 'E', // Glutamic Acid
//   'GAG': 'E', // Glutamic Acid
//   'GGA': 'G', // Glycine
//   'GGC': 'G', // Glycine
//   'GGG': 'G', // Glycine
//   'GGU': 'G', // Glycine
// };
