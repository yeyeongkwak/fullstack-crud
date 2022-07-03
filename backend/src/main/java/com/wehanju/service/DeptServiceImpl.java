package com.wehanju.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wehanju.dto.Dept;
import com.wehanju.mapper.DeptMapper;
@Service
public class DeptServiceImpl implements DeptService{
	
	@Autowired
	DeptMapper deptMapper;
	
	@Override
	public Dept getDeptByDeptno(int departmentId) {
		return deptMapper.getDeptByDeptno(departmentId);
	}

//	@Override
//	public String getDeptNameByDeptno(int departmentId) {
//		return deptMapper.getDeptNameByDeptno(departmentId);
//	}

	@Override
	public List<Dept> getAllDepts() {
		return deptMapper.getAllDepts();
	}

	@Override
	public void insertDept(Dept department) {
		deptMapper.insertDept(department);
	}

//	@Override
//	public void insertDepts(List<Dept> deptlist) {
//		deptMapper.insertDepts(deptlist);
//	}

	@Override
	public void updateDept(int departmentId, String departmentName, Byte departmentAvailable) {
		deptMapper.updateDept(departmentId, departmentName, departmentAvailable);
	}
	
	
	@Override
	public void deleteDeptByName(String departmentName) {
		deptMapper.deleteDeptByName(departmentName);
	}

	@Override
	public void deleteDeptByDeptId(int departmentId) {
		deptMapper.deleteDeptByDeptId(departmentId);
	}

	



}
