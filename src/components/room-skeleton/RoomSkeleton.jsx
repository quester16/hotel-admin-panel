import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export default function RoomSkeleton() {
  return (
    <Card sx={{ width: 240, border: "2px solid gray" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Box display="flex" alignContent="center" gap="30px">
            <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
            <Box display="flex" alignContent="center" gap="10px">
              <Skeleton variant="rounded" width={150} height={60} />
            </Box>
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Skeleton variant="rectangular" width={65} height={40} />
      </CardActions>
    </Card>
  );
}
