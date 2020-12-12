# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) Below is the controller for the app. This is the C in the MVC model. This is where the program will communicate with both the database and the view. The controller will interact directly with the database and grab whatever data needed and pass it along to where it is needed in the view. 

class BlogPostsController < ApplicationController
  def index
    # 2) The index is used to view all the entries that are in the database hence the '.all' found at the end of BlogPost

    @posts = BlogPost.all
  end

  def show
    # 3) The show method will allow the user to look into one specific entry in the database. The find method with the id being passed down into the params. Allows you to go and look for a specific entry in the database with the same id.

    @post = BlogPost.find(params[:id])
  end

  # 4) The new method will take the user to a form page. In the form page a user can start the creation of a new entry into the database. However the new method does not allow you to actually enter the database. It is more so staging the entry you want to make

  def new
    @post = Post.new
  end

  def create
    # 5) As mentioned above the new method does not allow the user to actually make an entry to the database. However the create method below will actually add the 'staged entry' from the new method. It does this by using the .create method. If the post is valid the user will be redirected to the new post page. If it isnt valid the user will be directed back to the new method page where the user will find the form once again

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) The update method is used to update or put/patch an entry in the database. By looking thru the logic of the function. You can see that it will first take the id of the entry you want to update. If the update is valid. It will then update the entry in the database.

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) If the destroy logic above was not valid. The user will be taken back to the post they tried to delete.

      redirect_to blog_post_path(@post)
    end
  end

  # 8) The private method below is known as strong params. The strong param method will ensure that the database will not be hacked or attacked. It will only allow certains types of entries to be made. In order for the database to stay protected. 

  private
  def blog_post_params
    # 9) The logic below ensures that the only being allowed into the blog_post database will be a :title column and a :content column

    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) The blogpost table is linked to another model called comments. Which means the blogpost is allowed to "has_many" comments to it along with the title and content data it already has. The comments will "belong_to" a single BlogPost. And it does this by referring to the Blogpost id. Which is how the two models will be connected. 

  has_many :comments
end
