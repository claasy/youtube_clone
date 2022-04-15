from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request, comment_id):
     replies = Reply.objects.filter(comment_id = request.comment_id)
     serializer = ReplySerializer(replies, many=True)
     return Response(serializer.data)
 

