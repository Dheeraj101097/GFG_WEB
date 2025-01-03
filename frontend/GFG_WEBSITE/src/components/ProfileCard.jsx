"use client";

import {
  Card,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import { X, Facebook, Instagram } from "iconoir-react";

const ProfileCard = (member) => {
  return (
    <Card className="max-w-xs">
      <Card.Header
        as="img"
        src="https://dub.sh/TdSBP0D"
        alt={member.coreTeam.name}
      />

      <Card.Body className="text-center">
        <Typography type="h5">{member.coreTeam.name}</Typography>

        <Typography className="my-1 text-foreground">
          {member.coreTeam.role}
        </Typography>
      </Card.Body>

      <Card.Footer className="flex items-center justify-center gap-1">
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <X className="h-3.5 w-3.5" />
          </Tooltip.Trigger>

          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <Facebook className="h-4 w-4" />
          </Tooltip.Trigger>

          <Tooltip.Content>
            Like
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <Instagram className="h-4 w-4" />
          </Tooltip.Trigger>

          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Card.Footer>
    </Card>
  );
};

export default ProfileCard;
