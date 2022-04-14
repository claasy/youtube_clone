from django.db import models
from authentication.models import User
from comments.models import Comment


# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=255)