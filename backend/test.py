import bcrypt
import hashlib

def hash_password(password):
    # 1. Кодируем пароль в байты
    password_bytes = password.encode('utf-8')
    
    # 2. Предварительный хеш SHA-256 (фиксированный размер 32 байта)
    sha256_hash = hashlib.sha256(password_bytes).digest()
    
    # 3. Хешируем результат через bcrypt
    salt = bcrypt.gensalt()
    # bcrypt может работать с raw байтами
    bcrypt_hash = bcrypt.hashpw(sha256_hash, salt)
    
    return bcrypt_hash.decode('utf-8')

def check_password(password, hashed):
    password_bytes = password.encode('utf-8')
    sha256_hash = hashlib.sha256(password_bytes).digest()
    return bcrypt.checkpw(sha256_hash, hashed.encode('utf-8'))

# Пример использования
password = "мой_очень_длинный_пароль_со_многими_символами_и_даже_с_эмодзи_😀"
hashed = hash_password(password)
print(len(hashed))
print(f"Хеш создан: {hashed[:50]}...")

# Проверка
is_valid = check_password(password, hashed)
print(f"Пароль верен: {is_valid}")