# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure--;asfdgijfadsjknasdfkljafsdkjlfadkjlf'

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'youtube_database',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
        
        
    }
}


