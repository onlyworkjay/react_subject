package kr.co.iei.subject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.subject.model.service.SubjectService;
import kr.co.iei.subject.model.vo.Subject;

@CrossOrigin(value="*")
@RequestMapping(value="/subjects")
@RestController
public class SubjectController {
	@Autowired
	private SubjectService subjectService;
	
	@GetMapping(value="/subjectList")
	public ResponseEntity<?> selectAllSubject(
	    @RequestParam int order,
	    @RequestParam(required = false) String keyword,
	    @RequestParam(required = false) Integer category,
	    @RequestParam(required = false) Integer level
	){
	    List<Subject> list = subjectService.selectAllSubject(order, keyword, category, level);
	    return ResponseEntity.ok(list);
	}
}



