import os
import glob

# Map bad encoding to correct characters
# â†’ = → (E2 86 92 interpreted as Latin-1)
# â‰ˆ = ≈ (E2 89 88 interpreted as Latin-1)
# â€“ = – (E2 80 93 interpreted as Latin-1)
# â€™ = ’ (E2 80 99 interpreted as Latin-1)
# Â (C2 A0 interpreted as Latin-1, sometimes shows as Â)

fixes = {
    '\u00e2\u0086\u0092': '\u2192',  # â†’ -> →
    '\u00e2\u0089\u0088': '\u2248',  # â‰ˆ -> ≈
    '\u00e2\u0080\u0093': '\u2013',  # â€“ -> –
    '\u00e2\u0080\u0099': '\u2019',  # â€™ -> ’
    '\u00e2\u0080\u009c': '\u201c',  # â€œ -> "
    '\u00e2\u0080\u009d': '\u201d',  # â€ -> "
}

# Also fix the raw byte sequences
raw_fixes = {
    b'\xe2\x86\x92': '\u2192'.encode('utf-8'),  # →
    b'\xe2\x89\x88': '\u2248'.encode('utf-8'),  # ≈
    b'\xe2\x80\x93': '\u2013'.encode('utf-8'),  # –
    b'\xe2\x80\x99': '\u2019'.encode('utf-8'),  # ’
}

files = glob.glob('*.html') + glob.glob('cases/*/index.html')

for fp in files:
    with open(fp, 'rb') as f:
        data = f.read()
    
    original = data
    for wrong, correct in raw_fixes.items():
        data = data.replace(wrong, correct)
    
    if data != original:
        with open(fp, 'wb') as f:
            f.write(data)
        print(f'Fixed: {fp}')
    else:
        print(f'OK: {fp}')
