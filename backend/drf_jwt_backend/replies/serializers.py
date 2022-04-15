from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        field =["id", "text", "comment_id", "user_id"]
        depth = 1
        
user_id = serializers.IntegerField(write_only = True)
comment_id = serializers.IntegerField(write_only = True)     
        