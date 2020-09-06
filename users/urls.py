from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

from django.conf import settings
from django.conf.urls.static import static


app_name='users'
urlpatterns = [
	path('register',views.register,name='register'),
	path('login',auth_views.LoginView.as_view(template_name='users/login.html'),name='login'),
	path('logout',auth_views.LogoutView.as_view(template_name='users/login.html'),name='logout'),
	path('<str:username>/profile',views.profile,name='profile'),
	path('reset',auth_views.PasswordResetView.as_view(template_name='users/password_reset.html'),name='passwordreset'),
	
	path('reset/done',
        auth_views.PasswordResetDoneView.as_view(template_name='users/password_reset_done.html'),
        name='password_reset_done'
    ),
	path('password_reset_confirm/<uidb64>/<token>/',
        auth_views.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'),
        name='password_reset_confirm'
    ),
]