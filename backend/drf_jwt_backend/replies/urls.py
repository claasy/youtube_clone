from django.urls import path, include
from replies import views 

urlpatterns = [
 
    # path('add/<int:comment_id>/', views.reply_comment), # // POST
    path('allreplies/<int:comment_id>/', views.comment_replies) #// GET ALL replies for a comment
    
]