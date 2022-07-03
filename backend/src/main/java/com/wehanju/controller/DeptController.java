package com.wehanju.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wehanju.dto.Dept;
import com.wehanju.service.DeptService;


@Controller
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
@org.springframework.web.bind.annotation.RestController

public class DeptController {
	
	@Autowired
	private DeptService deptService;
	
	//전체 부서 조회
	@GetMapping(value="/depts")
	public List<Dept> allDeptInfo(){
		return deptService.getAllDepts();
	}
	
	//부서 id로 정보조회
	@GetMapping(value="/depts/{departmentId}")
	public Dept searchDept(@PathVariable int departmentId) {
		return deptService.getDeptByDeptno(departmentId);
		
	}
	
	
	//프론트 단에서 input value값이 빈값이면 0을 넘겨주도록 코드 작성하기!!
	@PostMapping(value="/depts", consumes =MediaType.APPLICATION_JSON_VALUE)
	public void insertNewDept(@RequestBody Dept department) {
		deptService.insertDept(department);
	}
	
//	@PostMapping(value="/depts/list",consumes =MediaType.APPLICATION_JSON_VALUE)
//	public void insertNewDepts(@RequestBody List<Dept> deptlist) {
//		deptService.insertDepts(deptlist);
//	}
	@PutMapping(value = "/depts/{departmentId}/{departmentName}/{departmentAvailable}")
	public void updateDept(@PathVariable int departmentId, @PathVariable String departmentName, @PathVariable Byte departmentAvailable) {
		deptService.updateDept(departmentId, departmentName, departmentAvailable);
	}
	
	@DeleteMapping(value = "/depts/{departmentId}")
	public void deleteDeptByDeptId(@PathVariable int departmentId) {
		deptService.deleteDeptByDeptId(departmentId);
	}
	
	
	

}
