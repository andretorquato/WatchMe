import { useEffect, useState, memo } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: Number;
  selectGenreId: (id: number) => void;
}
const SideBarComponent = ({
  genres,
  selectedGenreId,
  selectGenreId,
}: SideBarProps) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            // onClick={() => handleClickButton(genre.id)}
            onClick={() => selectGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return prevProps.selectedGenreId !== nextProps.selectedGenreId;
});
