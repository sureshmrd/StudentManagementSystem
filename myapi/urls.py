from django.urls import path
from .views import Home,forgot_password,handle_upload,details,StudentView,Counselling,counsellor_login
urlpatterns = [
    path('', Home),
    path('students/',StudentView.as_view()),
    path('upload/', handle_upload, name='upload'),
    path('student/',details),
    path('forgotpassword/',forgot_password),
    path('counsellor/',Counselling.as_view()),
    path('login/',counsellor_login),
]