package com.notes.controller;

import com.notes.model.Notes;
import com.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
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

    @DeleteMapping("/clear")
    public @ResponseBody String clearNotes(){
        notesRepository.deleteAll();
        return "All notes have been erased.";
    }
}
