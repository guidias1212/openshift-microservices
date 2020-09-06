package com.notes.controller;

import com.notes.model.Notes;
import com.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NotesRepository notesRepository;

    @PostMapping("/new")
    public @ResponseBody String addNote(@RequestBody Notes inputNote){
        notesRepository.save(inputNote);
        return "New note created";
    }

    @GetMapping("/getAll")
    public @ResponseBody Iterable<Notes> getAllNotes() {
        return notesRepository.findAll();
    }

    @PostMapping("/clear")
    public @ResponseBody String clearNotes(){
        notesRepository.deleteAll();
        return "All notes have been erased.";
    }
}
