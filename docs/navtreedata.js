/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "XMSS Library", "index.html", [
    [ "Public key authentication", "public-key-authentication.html", [
      [ "Version", "index.html#autotoc_md52", null ],
      [ "License", "index.html#autotoc_md53", null ],
      [ "Documentation", "index.html#autotoc_md54", null ],
      [ "Root of trust", "public-key-authentication.html#autotoc_md0", null ],
      [ "Multiple roots of trust", "public-key-authentication.html#autotoc_md1", null ],
      [ "Public key confidentiality", "public-key-authentication.html#autotoc_md2", null ]
    ] ],
    [ "Signature verification", "signature-verification.html", [
      [ "Problem definition: Streaming", "signature-verification.html#autotoc_md3", null ],
      [ "Problem definition: Fault injection", "signature-verification.html#autotoc_md4", null ],
      [ "Solution", "signature-verification.html#autotoc_md5", [
        [ "Example: Simple verification", "signature-verification.html#autotoc_md6", null ],
        [ "Example: Verification with resilience", "signature-verification.html#autotoc_md7", [
          [ "Verification of small amounts of data", "signature-verification.html#autotoc_md8", null ],
          [ "Verification of larger amounts of data", "signature-verification.html#autotoc_md9", null ]
        ] ],
        [ "Example: Verification with streaming", "signature-verification.html#autotoc_md10", null ],
        [ "Example: Complex verification with resilience and streaming", "signature-verification.html#autotoc_md11", null ]
      ] ],
      [ "Conclusion", "signature-verification.html#autotoc_md12", null ]
    ] ],
    [ "Public key obfuscation", "public-key-obfuscation.html", [
      [ "Problem definition", "public-key-obfuscation.html#autotoc_md13", null ],
      [ "Public key obfuscation", "public-key-obfuscation.html#autotoc_md14", [
        [ "Security impact", "public-key-obfuscation.html#autotoc_md15", null ],
        [ "Storage and message size", "public-key-obfuscation.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Signature count hiding", "signature-count-hiding.html", [
      [ "Problem definition", "signature-count-hiding.html#autotoc_md17", null ],
      [ "Index obfuscation", "signature-count-hiding.html#autotoc_md18", [
        [ "When to use index obfuscation", "signature-count-hiding.html#autotoc_md19", null ],
        [ "Implications of using index obfuscation", "signature-count-hiding.html#autotoc_md20", null ],
        [ "Impact on security", "signature-count-hiding.html#autotoc_md21", null ],
        [ "Impact on back-ups", "signature-count-hiding.html#autotoc_md22", null ],
        [ "Interoperability", "signature-count-hiding.html#autotoc_md23", null ]
      ] ],
      [ "Conclusion", "signature-count-hiding.html#autotoc_md24", null ]
    ] ],
    [ "Hash optimization", "hash-optimization.html", [
      [ "Problem definition", "hash-optimization.html#autotoc_md25", null ],
      [ "Optimization options", "hash-optimization.html#autotoc_md26", null ],
      [ "Disabling a hash algorithm", "hash-optimization.html#autotoc_md27", null ],
      [ "Overriding a hash algorithm", "hash-optimization.html#autotoc_md28", null ]
    ] ],
    [ "Secure boolean functions", "secure-boolean-functions.html", [
      [ "Problem definition", "secure-boolean-functions.html#autotoc_md29", null ],
      [ "Rationale for using Hamming codes", "secure-boolean-functions.html#autotoc_md30", [
        [ "Rationale for not using a value with all bits 0", "secure-boolean-functions.html#autotoc_md31", null ],
        [ "Relation to functions returning an error code", "secure-boolean-functions.html#autotoc_md32", null ],
        [ "Rationale for using 8-bit values on 32/64-bit platforms", "secure-boolean-functions.html#autotoc_md33", null ]
      ] ],
      [ "Conclusion", "secure-boolean-functions.html#autotoc_md34", null ]
    ] ],
    [ "Secure conditional branches", "secure-conditional-branches.html", [
      [ "Problem definition", "secure-conditional-branches.html#autotoc_md35", null ],
      [ "Secret data", "secure-conditional-branches.html#autotoc_md36", null ],
      [ "Single branches", "secure-conditional-branches.html#autotoc_md37", null ],
      [ "Signing API", "secure-conditional-branches.html#autotoc_md38", null ],
      [ "Verification API", "secure-conditional-branches.html#autotoc_md39", null ]
    ] ],
    [ "Embedded targets", "embedded-targets.html", [
      [ "Example platform", "embedded-targets.html#autotoc_md40", null ],
      [ "Reducing size", "embedded-targets.html#autotoc_md41", [
        [ "Build type", "embedded-targets.html#autotoc_md42", null ],
        [ "Verification only", "embedded-targets.html#autotoc_md43", null ],
        [ "Disabling algorithms", "embedded-targets.html#autotoc_md44", null ],
        [ "Optimizing algorithms", "embedded-targets.html#autotoc_md45", null ]
      ] ],
      [ "Summary", "embedded-targets.html#autotoc_md46", null ]
    ] ],
    [ "Library versioning", "library-versioning.html", [
      [ "Version numbering", "library-versioning.html#autotoc_md47", null ],
      [ "Static or dynamic", "library-versioning.html#autotoc_md48", null ],
      [ "Checking the library version", "library-versioning.html#autotoc_md49", [
        [ "Compile-time", "library-versioning.html#autotoc_md50", null ],
        [ "Runtime", "library-versioning.html#autotoc_md51", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"types_8h.html#ae28a452b1a628877fd2fa9eb9502af68ad1b1f2a803061e2a0a263e5113442b6f"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';