# Generated by Django 4.0.4 on 2022-04-14 21:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_alter_comment_user'),
        ('replies', '0003_alter_reply_user'),
        ('authentication', '0003_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
