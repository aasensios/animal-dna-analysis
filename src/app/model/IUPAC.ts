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
  public static genetic_code = {
    'UCA': 'S',
    'UCC': 'S',
    'UCG': 'S',
    'UCU': 'S',
    'UUC': 'F',
    'UUU': 'F',
    'UUA': 'L',
    'UUG': 'L',
    'UAC': 'Y',
    'UAU': 'Y',
    'UAA': '*',
    'UAG': '*',
    'UGC': 'C',
    'UGU': 'C',
    'UGA': '*',
    'UGG': 'W',
    'CUA': 'L',
    'CUC': 'L',
    'CUG': 'L',
    'CUU': 'L',
    'CCA': 'P',
    'CAU': 'H',
    'CAA': 'Q',
    'CAG': 'Q',
    'CGA': 'R',
    'CGC': 'R',
    'CGG': 'R',
    'CGU': 'R',
    'AUA': 'I',
    'AUC': 'I',
    'AUU': 'I',
    'AUG': 'M',
    'ACA': 'T',
    'ACC': 'T',
    'ACG': 'T',
    'ACU': 'T',
    'AAC': 'N',
    'AAU': 'N',
    'AAA': 'K',
    'AAG': 'K',
    'AGC': 'S',
    'AGU': 'S',
    'AGA': 'R',
    'AGG': 'R',
    'CCC': 'P',
    'CCG': 'P',
    'CCU': 'P',
    'CAC': 'H',
    'GUA': 'V',
    'GUC': 'V',
    'GUG': 'V',
    'GUU': 'V',
    'GCA': 'A',
    'GCC': 'A',
    'GCG': 'A',
    'GCU': 'A',
    'GAC': 'D',
    'GAU': 'D',
    'GAA': 'E',
    'GAG': 'E',
    'GGA': 'G',
    'GGC': 'G',
    'GGG': 'G',
    'GGU': 'G'
  };

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
