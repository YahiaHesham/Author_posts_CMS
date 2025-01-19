import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface PostCardProps {
  authorName: string;
  coverImage: string;
  title: string;
}
export const PostCard: React.FC<PostCardProps> = ({
  authorName,
  coverImage,
  title,
}) => {
  return (
    <div className="flex flex-col items-center justify-start w-1/6">
      <Card
        sx={{
          width: 250, // Fixed width for all cards
          height: 300, // Fixed height for all cards
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={coverImage}
          sx={{
            height: 150, // Fixed height for image
            width: "100%", // Full width of the card
            objectFit: "cover", // Crop the image to fit the area
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            by {authorName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
