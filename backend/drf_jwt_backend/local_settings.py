# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ';asfdgijfadsjknasdfkljafsdkjlfadkjlf'

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'youtube_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password'
    }
}


